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
| Partisanship (separate) | 3 | 3 (medium confidence) | 2 |

How much these numbers can be trusted varies a lot. Hickenlooper's scores rest on votes and bills. Chew's rest mostly on campaign statements. Baisley's rest on a state record. The site's "discount campaign statements" switch shows how much that matters. Every rationale, and the evidence for and against each score, is in the site and in `data/evidence.json`. The site's "Tradeoffs & open questions" section gives, for each candidate, the strongest evidence for and against, the biggest unknown, and what would change the scores.

## Files

- `site/index.html`: the interactive site (open it directly in a browser, or serve the `site/` folder)
- `site/app.html`: page body used to build `index.html`
- `data/evidence.json`: the canonical dataset (candidates, scores with rationales, tradeoffs, limits, 75 evidence entries)
- `data/evidence.csv`: the evidence ledger as a spreadsheet
- `scripts/build.mjs`: checks the dataset (every evidence ID referenced by a score, partisanship rating or tradeoff exists, weights sum to 100, every source is an https link) and regenerates `site/data.js`, `site/index.html` and the CSV

```sh
node scripts/build.mjs
```

## Limits

- Some official pages (Senate.gov roll-call pages, senators' press-release sites) block automated retrieval. Entries drawn from them rely on the Senate floor log or press corroboration, as each entry notes.
- Resolved in the October 26 update: Hickenlooper voted yes on the ADVANCE Act (Senate floor log, Vote No. 200, 88–2); Chew's donation history was checked against FEC records (more to Republicans before 2025, more to Democrats and independents since joining Forward); Baisley's 2026 enactment record comes from the legislature (5 of 12 prime-sponsored bills signed), replacing an aggregator count; Baisley's role on HB25-1040 (nuclear as clean energy, now law) was added.
- Still not verified: the bill number for Baisley's uranium-mining effort, and whether Hickenlooper co-sponsored any nuclear fission bill.
- S. 5653, the 2026 Senate permitting package, was introduced Sept. 30, 2026 and sits in committee. A vote after the election could change the picture.
