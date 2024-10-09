import json
import os
import numpy as np
import re

class Object_Detection:         
    def object_search(self, classes, object, classesObject, obj_map, id2img_fps):
        vector_object_chosen = np.zeros(len(classes))
        self.opj_map = obj_map
        self.id2img_fps = id2img_fps
        
        for obj in object:
            if obj in classes:
                index = classes.index(obj)
                vector_object_chosen[index] = 1

        arr = classesObject @ vector_object_chosen

        indexed_arr = [(i, v) for i, v in enumerate(arr)]
        sorted_indexed_arr = sorted(indexed_arr, key=lambda x: x[1], reverse=True)

        a = 0
        s = []
        for i, v in sorted_indexed_arr:
            # print(i)
            a += 1
            if a == 100 or v == 0:
                break
            s.append(i)
                
        infos_query = list(map(self.opj_map.get, s))
        image_paths = [self.id2img_fps[int(info)] for info in infos_query]
        # print(image_paths)
        return image_paths