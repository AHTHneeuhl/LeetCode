class Codec:

    def __init__(self):
        self.encoded = dict()
        self.decoded = dict()
        self.base = "http://tinyurl.com/"

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        if longUrl not in self.encoded:
            shortUrl = self.base + str(len(self.encoded) + 1)
            self.encoded[longUrl] = shortUrl
            self.decoded[shortUrl] = longUrl
            return shortUrl

        return self.encoded[longUrl]

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        return self.decoded[shortUrl]
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))