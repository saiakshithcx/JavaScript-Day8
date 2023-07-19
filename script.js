function join(words) {
    let mergedWord = words[0];
    let overlapCount = 0; 
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      let overlap = ""; 
      for (let j = 0; j < mergedWord.length; j++) {
        if (mergedWord.slice(j) === word.slice(0, mergedWord.length - j)) {
          overlap = mergedWord.slice(j); 
          break;
        }
      }
      mergedWord += word.slice(overlap.length);
      overlapCount = Math.min(overlapCount, overlap.length) || overlap.length;
    }
  
    return [mergedWord, overlapCount];
  }
    //Test Cases
  console.log(join(["oven", "envier", "erase", "serious"]));
  
  console.log(join(["move", "over", "very"]));

  console.log(join(["to", "ops", "psy", "syllable"]));
  
  console.log(join(["aaa", "bbb", "ccc", "ddd"]));