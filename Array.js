const ArrayJS = {
    ["Compare"]: function(Array01, Array02){
        for (let i = 0; i < Array01.length; i++) {
            const element01 = Array01[i];
            const element02 = Array02[i];
            
            if(Array02.length > Array01.length || element01 != element02 || i > element02.length){
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

        for(let i = 0; i < Math.abs(Length+1); i++){
            Array.push(i);
        };

        return Array;
    },

    ["Equalize"]: function(Array){
        let summary = 0;
        let different_summary = 0;

        for(let i = 0; i < Array.length; i++){
            summary += Array[i];
        }

        if(summary % Array.length != 0){
            return null;
        }

        const equalize = parseInt(summary / Array.length, 10);

        for(let i = 0; i < Array.length; i++){
            different_summary += Math.abs(Array[i] - equalize);
        };

        return parseInt(different_summary / 2, 10)
    },

    ["DeepSearch"]: function(Search,Item){
        for(let i = 0; i < Search.length; i++){
            if(Search[i] == Item){
                return Search[i];
            }else if(Array.isArray(Search[i])){
                const result = ArrayJS.DeepSearch(Search[i],Item)
                if(result != undefined){ return result };
            };
        };
        return undefined;
    },

    ["Split"]: function(Array,Amount){
        const result = [];
        const chunkSize = Math.ceil(Array.length / Amount);
        for (let i = 0; i < Array.length; i += chunkSize) {
            let end = i + chunkSize;
            if (end > Array.length) {
              end = Array.length;
            }
            result.push(Array.slice(i, end));
          }
          return result;
    },

    ["MultiArray"]: class{
        array;
        Rows;
        Column;

        constructor(Rows, Columns){
            this.Rows = Rows;
            this.Columns = Columns;

            let array = [];
            for(let i = 0; i < Rows; i++){
                array[i] = [];
                for(let j = 0; j < Columns; j++){
                    array[i][j] = 0;
                };
            };
            this.array = array;
        };

        Add(Row, Column, Value){
            this.array[Row][Column] = Value;
        };

        Remove(Row, Column){
            this.array[Row].splice(Column,1);
        };
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
        },

        ["OddEvenSort"]: function(Array){
            let sorted = false;
            while (!sorted) {
              sorted = true;
              for (let i = 1; i < Array.length - 1; i += 2) {
                if (Array[i] > Array[i + 1]) {
                  [Array[i], Array[i + 1]] = [Array[i + 1], Array[i]];
                  sorted = false;
                }
              }
              for (let i = 0; i < Array.length - 1; i += 2) {
                if (Array[i] > Array[i + 1]) {
                  [Array[i], Array[i + 1]] = [Array[i + 1], Array[i]];
                  sorted = false;
                }
              }
            }
            return Array;
        }
    },
    
};

