export default percent => {
    let color = '#84ff00';
    let scoreLetter = 'A';
    let boxPadding = '0px';
    if (percent < 90) {
        color = '#d0ff00';
        scoreLetter = 'B';
    }
    if (percent < 80) {
        color = '#ffff00';
        scoreLetter = 'C';
    }
    if (percent < 70) {
        color = '#ff8b48';
        scoreLetter = 'D';
        boxPadding = '5px';
    }
    if (percent < 60) {
        color = '#ff1b1b';
        scoreLetter = 'F';
        boxPadding = '0px';
    }
    if (percent === null) {
        scoreLetter = '-';
        color = '#424242';
    }
    return {
        color,
        scoreLetter,
        boxPadding
    };
};
