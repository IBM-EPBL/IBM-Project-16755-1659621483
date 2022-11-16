
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np 
import pandas as pd
import pickle

df = pd.read_csv("Admission_Predict.csv")
x = df.iloc[:, 1:7].values
y = df.iloc[:, -1].values


std = StandardScaler()
x = std.fit_transform(x)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

model = LinearRegression()
model.fit(x_train,y_train)


def predict(parameter_list):
    return model.predict(parameter_list)[0]


pickle.dump(model, open('model.pkl', 'wb'))
