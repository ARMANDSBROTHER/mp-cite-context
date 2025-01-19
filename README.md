## Goals

To program a hover over display for references to show context further than date and name. Specifically indicators of study reliability (good/ relevant journal, Full relevent title, cited by other researchers)

### Side quest

display chart of distribution of reference dates for publication? (this can be a way to hide old debunked evidence, by hiding it behind a 'recent' study)

## Working Notes

### API Endpoint that works:

URL: https://dx.doi.org/10.1210/jc.2017-01658

Headers :

```json
{
  "Accept": "application/json"
}
```

---

Relevant fields within example response:

```jsonc
{
  // how many references
  "reference-count": 200,
  // The publisher
  "publisher": "The Endocrine Society",
  // Article title
  "title": "Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons: An Endocrine Society* Clinical Practice Guideline",
  //
  "URL": "http://dx.doi.org/10.1210/jc.2017-01658",
  "author": [
    {
      "given": "Wylie C",
      "family": "Hembree",
      "sequence": "first",
      "affiliation": [],
    },
  ],
  "is-referenced-by-count": 1559,
  "published-print": {
    "date-parts": [[2017, 11, 1]],
  },
  "resource": {
    "primary": {
      "URL": "http://academic.oup.com/jcem/article/102/11/3869/4157558",
    },
  },
}
```

### Implemented Features

- DOI API calling function to relevant tags
- Component that can fetch and show DOI information
- React [hook]](https://knowyourmeme.com/memes/man-door-hand-hook-car-door) wrapper for API call Function

### Missing Features

- no floating functionality
- no hover / focus effect
- Not usable on mobile (button could be injected into page, next to links, to suppliment function)
- browser extension?
