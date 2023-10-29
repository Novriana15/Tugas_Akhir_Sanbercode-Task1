import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'


// add to cart - sauce labs Onesies & sauce labs Bike
it('Test Sauce Demo Sauce labs product Onesies and Bike - Add To Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsOnesie() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBike()
    cartPage.clickCart()
    cartPage.assertOnesiesAndBike()
})


// remove from cart - sauce labs Onesies & sauce labs Bike
it('Test Sauce Demo Sauce labs product Onesies & Bike - Remove From Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.sauceLabsOnesie() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBike()
    cartPage.clickCart()
    cartPage.assertOnesiesAndBike()
    cartPage.removeFleeceJacketnBoltTshirt()
})