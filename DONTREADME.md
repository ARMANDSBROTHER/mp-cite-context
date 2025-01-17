# Notes

## Goals

to program a hover over display for references to show context further than date and name.

### Extra goals

display chart of distribution of reference dates for publication

## DOI (Digital Obj Id) API

Api = Application Programming Interface (computer to computer call and response)

Doi is the publication catalogue

Curly brakets is object

---

## Working Notes

API Endpoint that works:

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
      "affiliation": []
    }
  ],
  "is-referenced-by-count": 1559,
  "published-print": {
    "date-parts": [[2017, 11, 1]]
  },
  "reference": [
    {
      "DOI": "10.1136/bmj.328.7454.1490",
      "article-title": "Grading quality of evidence and strength of recommendations",
      "author": "GRADE Working Group",
      "year": "2004",
      "journal-title": "BMJ"
    }
  ],
  "resource": {
    "primary": {
      "URL": "http://academic.oup.com/jcem/article/102/11/3869/4157558"
    }
  }
}
```
