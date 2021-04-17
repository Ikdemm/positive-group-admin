module.exports = () => {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return code
}