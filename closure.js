// const wrapperfunctions = () => {
//     let counter = 0;

//     const increment = function () {
//         counter = counter + 1;
//         console.log(counter);
//     };
//     return increment;
// };

// const increment = wrapperfunctions();
// increment();
// increment();
// increment();
// increment();

// const createVendingMachine = function () {
//     const stock = ["cola", "chips", "chocolate", "juice", " nutes"];
//     let num = 0;
//     const add25(){
//         num += 25;
//         if(num === 100){
//             const random = Math.floor(Math.random() * stock.length);
//             const randomeitem = stock[random];
//             con
//         }
//     }
// };

const createDataBase = () => {
    let storage = ["Apple", "bannana", "carrot"];

    const addItem = (item) => {
        storage.push(item);
        console.log(storage);
    };
    const removeItem = () => {
        storage = [];
        console.log(storage);
    };
    return [addItem, removeItem];
};

const [add, clear] = createDataBase();
