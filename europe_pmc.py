import requests
import datetime
import logging

class EuropePMCPaper:
    def __init__(self, data):
        self.data = data
        self.title = data.get('title')
        self.summary = data.get('abstractText', '')
        self.authors = [a.get('fullName') for a in data.get('authorList', {}).get('author', [])]
        
        # Construct URL
        if data.get('doi'):
            self.entry_id = f"https://doi.org/{data.get('doi')}"
        else:
            self.entry_id = f"https://europepmc.org/article/{data.get('source')}/{data.get('id')}"
            
        self.paper_id = data.get('id')
        self.source = data.get('source')
        self.doi = data.get('doi')
        
        pub_date = data.get('firstPublicationDate')
        if pub_date:
            try:
                self.published = datetime.datetime.strptime(pub_date, '%Y-%m-%d')
            except ValueError:
                # Try just year
                try:
                    self.published = datetime.datetime.strptime(data.get('pubYear'), '%Y')
                except:
                    self.published = datetime.datetime.now()
        else:
            self.published = datetime.datetime.now()
            
        self.updated = self.published
        self.comment = f"Source: {self.source}"

    def get_short_id(self):
        return self.paper_id

class EuropePMCSearch:
    def __init__(self, query, max_results=10):
        self.query = query
        self.max_results = max_results
        self.base_url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"
    
    def results(self):
        # Query: (original_query) AND (SRC:MED OR SRC:PPR)
        # We explicitly include MED (PubMed) and PPR (Preprints like bioRxiv, medRxiv)
        full_query = f"({self.query}) AND (SRC:MED OR SRC:PPR)"
        
        params = {
            "query": full_query,
            "format": "json",
            "resultType": "core",
            "pageSize": self.max_results,
            "sort": "FIRST_PDATE_D" # Sort by date descending
        }
        
        try:
            response = requests.get(self.base_url, params=params, timeout=30)
            response.raise_for_status()
            data = response.json()
            result_list = data.get("resultList", {}).get("result", [])
            
            for result in result_list:
                # Skip if it's likely an arXiv paper (we already fetch those via arxiv API)
                # Europe PMC often lists arXiv papers under PPR. 
                # We can check if the DOI contains 'arxiv' or if the bookOrReportDetails contains it.
                if result.get('source') == 'PPR':
                    doi = result.get('doi', '').lower()
                    if 'arxiv' in doi:
                        continue
                    # Also check if it has an arXiv ID field
                    if 'arxivId' in result:
                        continue

                yield EuropePMCPaper(result)
                
        except Exception as e:
            logging.error(f"Europe PMC search failed: {e}")
            return []
