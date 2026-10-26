# Colorado 2026 U.S. Senate: Abundance & Technology Analysis

A nonpartisan, evidence-linked tool for comparing the three main candidates in Colorado's November 3, 2026 U.S. Senate race on abundance economics, technological progress, and effective governance. It does not recommend a candidate.

Research cutoff: October 26, 2026.

## Candidates (ballot status verified)

| Candidate | Party | Status |
|---|---|---|
| John Hickenlooper | Democratic | Incumbent; won the June 30 primary with 52.8% over Julie Gonzales |
| Bob Chew | Colorado Forward Party | Forward nominee per CPR and the Colorado Forward Party; Colorado Newsline lists him as Independent |
| Mark Baisley | Republican | Only candidate to clear the April 11 state assembly; unopposed in the primary |

Other minor-party and unaffiliated candidates are on the ballot but out of scope.

## Default scores (0–4)

| Dimension (weight) | Hickenlooper | Chew | Baisley |
|---|---|---|---|
| Building abundance (25%) | 3 | 3 (statements only) | 2 |
| Energy abundance (25%) | 3 | 3 (statements only) | 3 |
| Technological progress (20%) | 3 | Unknown | 3 |
| Economic openness (15%) | 3 | 3 | 2 |
| Pragmatism & execution (15%) | 4 | 2 | 2 |
| **Weighted** | **3.15** | **2.81** (80% coverage) | **2.45** |
| Partisanship (separate) | 3 | 3 (low confidence) | 2 |

How much these numbers can be trusted varies a lot. Hickenlooper's scores rest on votes and bills. Chew's rest mostly on campaign statements. Baisley's rest on a state record. The site's "discount campaign statements" switch shows how much that matters. Every rationale, and the evidence for and against each score, is in the site and in `data/evidence.json`.

## Files

- `site/index.html`: the interactive site (open it directly in a browser, or serve the `site/` folder)
- `site/app.html`: page body used to build `index.html`
- `data/evidence.json`: the canonical dataset (candidates, scores with rationales, 67 evidence entries)
- `data/evidence.csv`: the evidence ledger as a spreadsheet
- `scripts/build.mjs`: checks the dataset (every referenced evidence ID exists, weights sum to 100, every source is an https link) and regenerates `site/data.js`, `site/index.html` and the CSV

```sh
node scripts/build.mjs
```

## Limits

- The research environment could not open web pages directly. Entries were built from search-indexed excerpts of each linked page, so check the source before relying on any single entry.
- Not verified: Hickenlooper's ADVANCE Act vote and nuclear position; Chew's past donation record; the bill number for Baisley's uranium-mining effort; aggregator counts of Baisley's enacted bills.
- The Senate vote on the 2026 permitting package (S. 5653) is expected after the election and could change the picture.
