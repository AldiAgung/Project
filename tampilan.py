from flask import Blueprint, render_template

tampilan = Blueprint(__name__, "tampilan")

@tampilan.route("/")
def beranda():
    return render_template("interface.html")