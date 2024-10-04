import json
import os
import numpy as np
import re

class Object_Detection:         
    def object_search(self, classes, object, classesObject):
        vector_object_chosen = np.zeros(len(classes))
        
        for obj in object:
            if obj in classes:
                index = classes.index(obj)
                vector_object_chosen[index] = 1

        arr = classesObject @ vector_object_chosen

        indexed_arr = [(i, v) for i, v in enumerate(arr)]
        sorted_indexed_arr = sorted(indexed_arr, key=lambda x: x[1], reverse=True)

        a = 0
        s = 0
        for i, v in sorted_indexed_arr:
            print(i)
            s = s + i
            a += 1
            if a == 20 or v == 0:
                break
        return s