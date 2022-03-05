import React, {useState} from "react";
import "./App.css";
import {Header} from "./Header";
import {Body} from "./Body";
import {NewComponent} from "./NewComponent";
import {Button} from "./Button";
import {FilterComponent} from "./FilterComponent";

export type FilterType = "All" | "RUBLS" | "Dollars" ;

function App() {
    const topCars = [
        {manufacturer: "BMW", model: "m5cs"},
        {manufacturer: "Mercedes", model: "e63s"},
        {manufacturer: "Audi", model: "rs6"}
    ]

    const Handler1 = (name: string, num: number) => {
        console.log(name, num)
    }
    const Handler2 = (name: string, num: number) => {
        console.log(name, num)
    }
    let [num, setNums] = useState(1)
    const getPlusNum = () => {
        setNums(++num)
        console.log(num)
    }
    const getNull = () => {
        setNums(num = 0)
    }
    const [money, setMoney] = useState([
        {banknots: "Dollars", value: 100, number: " a1234567890"},
        {banknots: "Dollars", value: 50, number: " z1234567890"},
        {banknots: "RUBLS", value: 100, number: " w1234567890"},
        {banknots: "Dollars", value: 100, number: " e1234567890"},
        {banknots: "Dollars", value: 50, number: " c1234567890"},
        {banknots: "RUBLS", value: 100, number: " r1234567890"},
        {banknots: "Dollars", value: 50, number: " x1234567890"},
        {banknots: "RUBLS", value: 50, number: " v1234567890"},
    ]);

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money


    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }
    const filterHandler = (buttonFilter: FilterType) => {
        setFilter(buttonFilter)
    }

    return (
        <div className="App">
                <FilterComponent currentMoney={currentMoney} filterHandler={filterHandler}/>

            <div>
                <hr/>
                <h1>{num}</h1>
                <button onClick={getPlusNum}>button getPlusNum</button>
                <button onClick={getNull}>button getNull</button>
                <hr/>
            </div>
            <Header title={"Hello world!"}/>
            <Body title={"Hello name"}/>
            <hr/>
            <NewComponent topCars={topCars}/>
            <div>
                <Button name={"one"} callback={() => Handler1("I am button №", 1)}/>
                <Button name={"two"} callback={() => Handler2("I am button №", 2)}/>
            </div>
        </div>
    )

}

export default App;
