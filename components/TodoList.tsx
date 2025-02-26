"use client"
import React, {useState} from "react"

interface Data {
    type: string;
    name: string;
}

const TodoList = () => {
  const [ items, setItems ] = useState<Data[]>(initialValue)
  const [ fruits, setFruits ] = useState<Data[]>([])
  const [ vegetables, setVegetables ] = useState<Data[]>([])

  const handleRemoveItem = (indexToRemove: number) => {
    const itemToRemove = items[indexToRemove];
    setItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));

    setTimeout(() => {
        if (itemToRemove?.type === "Fruit") {
            setFruits(prevItems => {
                const indexToRemove= prevItems.findIndex(obj => obj.name === itemToRemove.name)
                return prevItems.filter((_, index) => index !== indexToRemove)
            });
        } else {
            setVegetables(prevItems => {
                const indexToRemove= prevItems.findIndex(obj => obj.name === itemToRemove.name)
                return prevItems.filter((_, index) => index !== indexToRemove)
            });
        }
        
        setItems(prevItems => {
            if (prevItems.map(obj => obj.name).includes(itemToRemove.name)) {
                return prevItems
            }
            return [...prevItems, itemToRemove]
        });
    }, 5000);
  };
  
  const addItem = (newItem: Data) => {
    setItems(prevItems => [...prevItems, newItem]);
  };
  
  const addFruit = (newItem: Data) => {
    setFruits([...fruits, newItem]);
  };

  const removeFruit = (indexToRemove: number) => {
    setFruits(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const addVegetables = (newItem: Data) => {
    setVegetables([...vegetables, newItem]);
  };

  const removeVegetables = (indexToRemove: number) => {
    setVegetables(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="h-screen flex items-center">
        <div className="container mx-auto my-3 bg-white p-5 pb-0 min-h-[813px] grid grid-cols-3 grid-rows-1 gap-4">
            <div>
                {items.map((obj,i) => (
                    <div key={i} className="mb-4 flex justify-center">
                        <button 
                            type="button" 
                            className="border-2 border-stone-300 p-3 w-full text-black text-xl font-semibold" 
                            onClick={ async () => {
                                handleRemoveItem(i)
                                if (obj.type === "Fruit") {
                                    addFruit(obj)
                                } else {
                                    addVegetables(obj)
                                }
                            }}
                        >
                            {obj.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className="border-2 border-stone-300 mb-4">
                <div className="text-black text-center mb-4 p-4 bg-gray-400 text-xl font-semibold">Fruit</div>
                    <div className="flex flex-col px-3">
                        {fruits.map((obj,i) => (
                            <button
                                key={i}
                                type="button" 
                                className="border-2 border-stone-300 mb-3 p-3 text-black text-xl font-semibold" 
                                onClick={() => {
                                    addItem(obj)
                                    removeFruit(i)
                                }}
                            >
                                {obj.name}
                            </button>
                        ))}
                    </div>
            </div>
            <div className="border-2 border-stone-300 mb-4">
                <div className="text-black text-center mb-4 p-4 bg-gray-400 text-xl font-semibold">Vegetable</div>
                    <div  className="flex flex-col px-3">
                        {vegetables.map((obj,i) => (
                            <button 
                                key={i}
                                type="button" 
                                className="border-2 border-stone-300 mb-3 p-3 text-black text-xl font-semibold"
                                onClick={() => {
                                    addItem(obj)
                                    removeVegetables(i)
                                }}
                            >
                                {obj.name}
                            </button>
                        ))}
                    </div>
            </div>
        </div>
    </div>
  )
}

const initialValue =  [
  {
      type: 'Fruit',
      name: 'Apple',
  },
  {
      type: 'Vegetable',
      name: 'Broccoli',
  },
  {
      type: 'Vegetable',
      name: 'Mushroom',
  },
  {
      type: 'Fruit',
      name: 'Banana',
  },
  {
      type: 'Vegetable',
      name: 'Tomato',
  },
  {
      type: 'Fruit',
      name: 'Orange',
  },
  {
      type: 'Fruit',
      name: 'Mango',
  },
  {
      type: 'Fruit',
      name: 'Pineapple',
  },
  {
      type: 'Vegetable',
      name: 'Cucumber',
  },
  {
      type: 'Fruit',
      name: 'Watermelon',
  },
  {
      type: 'Vegetable',
      name: 'Carrot',
  },
]

export default TodoList