const ArrayJS = {
    ["Compare"]: function(Array1, Array2){
        for (let i = 0; i < Array1.length; i++) {
            const element01 = Array1[i];
            const element02 = Array2[i];
            
            if(Array2.length > Array1.length || element01 != element02 || i > element02.length){
                return false;
            };
        };

        return true;
    },

    ["Shuffle"]: function(Array){
        for (let i = Array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            const k = Array[i];
            Array[i] = Array[j];
            Array[j] = k;
          }
        return Array;
    },

    ["Swap"]: function(Array, index01, index02){
        const temp = Array[index01];
        Array[index01] = Array[index02];
        Array[index02] = temp;

        return Array;
    },

    ["GenerateArray"]: function(Length){
        const Array = [];

        for(let i = 0; i < Length; i++){
            Array.push(i);
        };

        return Array;
    },

    ["Sort"]: {
        ["BlockSort"]: function(Array){
            let blocks = [];
            for (let i = 0; i < Array.length; i += 16) {
                let block = [];
                
                for (let j = i; j < i + 16 && j < Array.length; j++) {
                    block.push(Array[j]);
                }
    
                block.sort((a, b) => a - b);
                blocks.push(block);
            }
     
            let result = [];
            while (blocks.length > 0) {
                let minIdx = 0;
            for (let i = 1; i < blocks.length; i++) {
                if (blocks[i][0] < blocks[minIdx][0]) {
                    minIdx = i;
                }
            }
     
            result.push(blocks[minIdx][0]);
            blocks[minIdx].shift();
     
            if (blocks[minIdx].length === 0) {
                blocks.splice(minIdx, 1);
            }
        }
     
        return result;
        },

        ["BubbleSort"]: function(Array) {
            let n = Array.length;
            let isSwapped = false;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (Array[j] > Array[(j+1)]) {
                        ArrayJS.Swap(Array, (j+1), j)
                        isSwapped = true;
                    }
                }
                if(!isSwapped) {
                    break;
                }
            }
            return Array;
        }
    }

    
};

