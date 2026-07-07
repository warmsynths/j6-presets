# RFC: Surfacing Chord Data & Feature Ideas

## 1. Context
We have recently restructured and enriched our flat `chords.json` dataset into a normalized relational structure. This process involved parsing our 93 chord sets and using basic music theory heuristics to calculate advanced analytical properties for each set. 

This document outlines exactly what data we now have available and proposes features we can build into the application to leverage this data for a better user experience.

---

## 2. What Data We Have (The Relational Datasets)

We have three primary tables (`genres.json`, `chord_sets.json`, `set_chords.json`) that provide the following data points:

### 2.1 Core Entities
* **Genres:** 29 unique genres (e.g., Pop, Jazz, Synthwave).
* **Chord Sets:** 93 distinct sets mapping to genres.
* **Chords:** 1,116 individual mapped chords (12 per set).

### 2.2 Analytical Criteria (Per Chord Set)
* **`complexity`:** A score (0-100) reflecting how "advanced" the set is, calculated by counting slash chords, extensions (9ths, 11ths), and alterations.
* **`inferred_key`:** The most likely tonal center (Key and Scale, e.g., "C Major" or "F Minor"), guessed by analyzing root note frequencies and the quality of the first/last chords.
* **`diatonicToneRatio`:** A ratio indicating how strictly the chords adhere to a single diatonic scale (vs. borrowing chords out of key).

### 2.3 Deep Analysis (The `analysis` object)
* **`qualityCounts`:** A quantitative breakdown of chord qualities within the set (Major, Minor, Diminished, Augmented).
* **`extensionCounts`:** A quantitative breakdown of chord extensions (7, 9, 11, 13, sus).
* **`tags`:** Dynamically generated mood and vibe descriptors based on the set's composition (e.g., `Dark`, `Bright`, `Jazzy`, `Complex`, `Retro`).
* **`recommendedProgression`:** A generated 3 or 4-chord sequence (e.g., `C - C# - D - D#`) providing an immediate, playable starting point for the set.

---

## 3. Proposed Features & Product Ideas

With this enriched data, we can build a variety of new features to make the application a more powerful tool for musicians and producers.

### Idea 1: Advanced Tag-Based Filtering
**Concept:** Move beyond just filtering by "Genre". Introduce a multi-select tagging system in the UI.
* **How it works:** Users can click pill-shaped toggle buttons to filter sets by the dynamic `tags` (e.g., "Show me sets that are *Jazzy* AND *Complex*").
* **Data Used:** `analysis.tags`, `complexity`

### Idea 2: Scale & Key Search
**Concept:** Allow users who already know what key their song is in to find matching chord sets.
* **How it works:** A dropdown filter in the search modal where a user can select "Key of C Minor". The app filters sets where `inferred_key` matches. 
* **Data Used:** `inferred_key`

### Idea 3: "Similar Sets" Recommendation Engine
**Concept:** When a user is viewing a set they like, suggest 3 other sets they might also enjoy.
* **How it works:** We can build a simple recommendation algorithm that finds sets with matching `genre_id`, similar `complexity` scores (+/- 10 points), and overlapping `tags`.
* **Data Used:** `genre_id`, `complexity`, `analysis.tags`

### Idea 4: "Quick Start" Progression Generator
**Concept:** Give the user instant musical inspiration without having to figure out how the 12 chords fit together.
* **How it works:** Surface the `recommendedProgression` prominently in the "Set Info" panel. We could even add a small "Play" icon that triggers a rudimentary Web Audio API synth to preview those 4 chords.
* **Data Used:** `analysis.recommendedProgression`

### Idea 5: Educational Analysis Dashboards
**Concept:** Help beginners understand *why* a chord set sounds the way it does.
* **How it works:** In the UI, clicking an "Analyze" button on a set flips the card to reveal mini bar charts showing the `qualityCounts` (e.g., 70% Major, 30% Minor) and `extensionCounts`. It visually explains the "flavor" of the set.
* **Data Used:** `analysis.qualityCounts`, `analysis.extensionCounts`

### Idea 6: The "Vibe" Matrix (Visual Explorer)
**Concept:** A new, alternative 2D grid view for exploring presets.
* **How it works:** Instead of a list, map sets on a 2D grid. The X-axis could be `complexity` (Simple to Advanced), and the Y-axis could be Mood (Dark to Bright, based on `tags` and `qualityCounts`). Users click a dot on the matrix to hear the set.
* **Data Used:** `complexity`, `analysis.tags`, `analysis.qualityCounts`

---

## 4. Next Steps & Technical Considerations
If we choose to proceed with any of these features, we have a technical decision to make regarding how the frontend consumes this data:
1. **Keep it flat:** We can merge the rich `analysis` properties back into a single `chords.json` array if we want to keep the current frontend architecture exactly as is.
2. **Move to a Database/API:** If we want to implement the "Similar Sets" engine or heavy filtering, uploading these relational files to a backend (like Supabase or Firebase) would allow us to write powerful SQL/NoSQL queries instead of doing it all client-side.
