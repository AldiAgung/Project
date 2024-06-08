from flask import Blueprint, render_template
import pickle
import pandas as panda
import numpy as np

tampilan = Blueprint(__name__, "tampilan")

@tampilan.route("/")
def beranda():
    return render_template("interface.html")