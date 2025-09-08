## statbase.py
""" Statistical Base Module
Provides foundational statistical functions and utilities."""

from statistics import *
from math import *
import numpy as np


# --- IGNORE WARNINGS ---
import warnings
warnings.filterwarnings("ignore")

# --- STATISTICAL FUNCTIONS ---

class StatBase:
    """A class encapsulating basic statistical functions."""

    @staticmethod
    def mode(data):
        """Calculate the mode of a list of numbers."""
        return mode(data)

    @staticmethod
    def variance(data):
        """Calculate the variance of a list of numbers."""
        return variance(data)

    @staticmethod
    def np_mean(data):
        """Calculate the mean using numpy for better performance on large datasets."""
        return np.mean(data)

    @staticmethod
    def np_median(data):
        """Calculate the median using numpy for better performance on large datasets."""
        return np.median(data)

    @staticmethod
    def np_std(data):
        """Calculate the standard deviation using numpy for better performance on large datasets."""
        return np.std(data)