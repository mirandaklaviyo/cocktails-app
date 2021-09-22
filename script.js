const getDrinks = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then((res) => res.json())
    .then(res => {
        console.log(res)
    
        for (let i = 0; i < res.drinks.length; i++) {
            console.log(res.drinks[i])
            const drink = res.drinks[i]
    
            const drinkImage = document.createElement('img')
            drinkImage.setAttribute('src', drink.strDrinkThumb)
            drinkImage.setAttribute('alt', drink.strDrink)
    
            document.querySelector('main').appendChild(drinkImage)

            const drinkDiv = document.createElement('div')
            const drinkDesc = document.createElement('p')

            drinkDesc.innerText = drink.strDrink
            drinkDiv.append(drinkImage, drinkDesc)

            document.querySelector('main').appendChild(drinkDiv)
        }
    
    })

}

getDrinks()


