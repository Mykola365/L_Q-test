class LoginPage {

    get username() {return $('#user-name')}
    get password() {return $('#password')}
    get loginButton() {return $('#login-button')}


    async setUsernameInput(value) {
        await this.username.addValue(value)
    }
    async setPasswordInput(value) {
        await this.password.addValue(value)
    }
    async cliickOnLoginButton() {
        await this.loginButton.click()
    }


}
export default new LoginPage()