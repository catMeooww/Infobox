class Infobox {
    constructor(name, text, image, use, onUse, onClosed, buttoncolor, buttonbackground) {
        this.name = name;
        this.text = text;
        this.image = image;
        this.use = use;
        this.usefunction = onUse;
        this.closefunction = onClosed;
        this.buttoncolor = buttoncolor;
        this.buttonbg = buttonbackground;
        this.i = 101
    }
    open() {
        document.getElementById("infoBox").innerHTML = "<button id='infobox_close' onclick='" + this.closefunction + "'>X</button><label>" + this.name + "</label><br><hr><br><div id='infobox_main'><h1>" + this.text + "</h1><br><br><img id='infobox_img' src='" + this.image + "'><br><hr><br><button id='infobox_use' onclick='" + this.usefunction + "'>" + this.use + "</button></div>";
        document.getElementById("infobox_use").style.color = this.buttoncolor;
        document.getElementById("infobox_use").style.backgroundColor = this.buttonbg;
        this.i = 101;
        this.renderBox();
    }
    renderBox() {
        setTimeout(() => {
            var percent = String(this.i) + "%";
            document.getElementById("infoBox").style.left = percent;
            if (this.i > 10) {
                this.i--;
                this.renderBox();
            }
        }, 7);
    }

    close() {
        this.i = 10;
        this.unrenderBox();
    }
    unrenderBox() {
        setTimeout(() => {
            var percent = String(this.i) + "%";
            document.getElementById("infoBox").style.left = percent;
            if (this.i < 101) {
                this.i++;
                this.unrenderBox();
            }
        }, 7);
    }
}