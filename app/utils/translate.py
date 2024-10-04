from pyvi import ViUtils, ViTokenizer
import unittest
from deep_translator import GoogleTranslator
from difflib import SequenceMatcher
from langdetect import detect

class Translation:
    def __init__(self, from_lang='vi', to_lang='en'):
        self.translator = GoogleTranslator(source=from_lang, target=to_lang)

    def __call__(self, text):
        return self.translator.translate(text)
    
if __name__ == "__main__":
    unittest.main()