import loginPage from "./../pageobjects/login.page.js";
// Mykola Turchyn ('mukolatyrshyn@gmail.com')
describe ("login page ", () => {

    it("login with corect data", async ()=> {
        await browser.url('https://www.saucedemo.com');

        await loginPage.setUsernameInput('standard_user')
        await loginPage.setPasswordInput('secret_sauce')
        await loginPage.cliickOnLoginButton()
    })
    it("Should corect title", async ()=> {
        await browser.url('https://www.saucedemo.com');

        const title = await browser.getTitle()
        await expect(browser).toHaveTitle('Swag Labs')

    })
    it("Login button is enabled", async ()=> {
        await browser.url('https://www.saucedemo.com');

        let LoginBtn = await $('#login-button')
        let isEnabled = LoginBtn.isEnabled()
        console.log(isEnabled)

    })
    xit("Click add to cart", async ()=> {
        await browser.url('https://www.saucedemo.com');

        let ClickAddCartBtn = await $('//*[@id="add-to-cart-sauce-labs-backpack"]')
        await ClickAddCartBtn.click()

        let ClickShoppingCart = await $('#shopping_cart_container')
        await ClickShoppingCart.click()

        const Shopingpage = await $('#cart_contents_container > div > div.cart_list > div.cart_item')
        let displayed = await Shopingpage.isDisplayed()
        console.log(displayed)


    })

    // it("login with incorect data", async ()=> {
    //     await browser.url('https://www.saucedemo.com');

    //     await LoginPage.setUsernameInput('standard_man')
    //     await LoginPage.setPasswordInput('secret_password')
    //     await LoginPage.cliickOnLoginButton()
    // })
})