//lottie animation
var animationData = {"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":"none"},"fr":25,"ip":0,"op":51,"w":1080,"h":1080,"nm":"instagram-logo","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[539.642,540,0],"ix":2},"a":{"a":0,"k":[396.5,0.5,0],"ix":1},"s":{"a":0,"k":[360,360,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":90,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Size - Rectangle Path 1","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":2,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Position - Rectangle Path 1","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":3,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Position - Transform","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":4,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Scale - Transform","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":5,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14,14],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.901176542394,0.043115081039,0.043115081039,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[427.125,-29.625],"ix":2,"x":"var $bm_rt;\nvar amp, freq, decay, n, n, t, t, v;\ntry {\n    amp = $bm_div(effect('Elastic Controller')(1), 200);\n    freq = $bm_div(effect('Elastic Controller')(2), 30);\n    decay = $bm_div(effect('Elastic Controller')(3), 10);\n    $bm_rt = n = 0;\n    if (numKeys > 0) {\n        $bm_rt = n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    if (n == 0) {\n        $bm_rt = t = 0;\n    } else {\n        $bm_rt = t = $bm_sub(time, key(n).time);\n    }\n    if (n > 0) {\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n    } else {\n        $bm_rt = value;\n    }\n} catch (e$$4) {\n    $bm_rt = value = value;\n}"},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"t":14,"s":[0,0],"h":1},{"t":15,"s":[20,20],"h":1},{"t":16,"s":[40,40],"h":1},{"t":17,"s":[60,60],"h":1},{"t":18,"s":[80,80],"h":1},{"t":19,"s":[100,100],"h":1},{"t":20,"s":[158.207,158.207],"h":1},{"t":21,"s":[186.48,186.48],"h":1},{"t":22,"s":[192.47,192.47],"h":1},{"t":23,"s":[183.875,183.875],"h":1},{"t":24,"s":[167.397,167.397],"h":1},{"t":25,"s":[148.235,148.235],"h":1},{"t":26,"s":[129.961,129.961],"h":1},{"t":27,"s":[114.667,114.667],"h":1},{"t":28,"s":[103.252,103.252],"h":1},{"t":29,"s":[95.756,95.756],"h":1},{"t":30,"s":[91.682,91.682],"h":1},{"t":31,"s":[90.268,90.268],"h":1},{"t":32,"s":[90.688,90.688],"h":1},{"t":33,"s":[92.186,92.186],"h":1},{"t":34,"s":[94.153,94.153],"h":1},{"t":35,"s":[96.148,96.148],"h":1},{"t":36,"s":[97.895,97.895],"h":1},{"t":37,"s":[99.256,99.256],"h":1},{"t":38,"s":[100.197,100.197],"h":1}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4,"x":"var $bm_rt;\nvar amp, freq, decay, n, n, t, t, v;\ntry {\n    amp = $bm_div(effect('Elastic Controller')(1), 200);\n    freq = $bm_div(effect('Elastic Controller')(2), 30);\n    decay = $bm_div(effect('Elastic Controller')(3), 10);\n    $bm_rt = n = 0;\n    if (numKeys > 0) {\n        $bm_rt = n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    if (n == 0) {\n        $bm_rt = t = 0;\n    } else {\n        $bm_rt = t = $bm_sub(time, key(n).time);\n    }\n    if (n > 0) {\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n    } else {\n        $bm_rt = value;\n    }\n} catch (e$$4) {\n    $bm_rt = value = value;\n}"},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"t":10,"s":[50,40],"h":1},{"t":11,"s":[46.667,43.333],"h":1},{"t":12,"s":[43.333,46.667],"h":1},{"t":13,"s":[40,50],"h":1},{"t":14,"s":[39.844,50.822],"h":1},{"t":15,"s":[40.797,50.536],"h":1},{"t":16,"s":[46,46],"h":1},{"t":17,"s":[47.293,45.138],"h":1},{"t":18,"s":[47.922,44.719],"h":1},{"t":19,"s":[48.055,44.63],"h":1},{"t":20,"s":[47.864,44.757],"h":1},{"t":21,"s":[47.498,45.002],"h":1},{"t":22,"s":[47.072,45.285],"h":1},{"t":23,"s":[46.666,45.556],"h":1},{"t":24,"s":[46.326,45.783],"h":1},{"t":25,"s":[46.072,45.952],"h":1},{"t":26,"s":[45.906,46.063],"h":1},{"t":27,"s":[45.815,46.123],"h":1},{"t":28,"s":[45.784,46.144],"h":1},{"t":29,"s":[45.793,46.138],"h":1},{"t":30,"s":[45.826,46.116],"h":1},{"t":31,"s":[45.87,46.087],"h":1},{"t":32,"s":[45.914,46.057],"h":1},{"t":33,"s":[45.953,46.031],"h":1},{"t":34,"s":[45.983,46.011],"h":1},{"t":35,"s":[46.004,45.997],"h":1},{"t":36,"s":[46.017,45.989],"h":1},{"t":37,"s":[46.022,45.985],"h":1},{"t":38,"s":[46.023,45.985],"h":1}],"ix":2},"p":{"a":1,"k":[{"t":7,"s":[123,0],"h":1},{"t":8,"s":[102.5,0],"h":1},{"t":9,"s":[81.993,0],"h":1},{"t":10,"s":[61.501,0],"h":1},{"t":11,"s":[41.004,0],"h":1},{"t":12,"s":[20.5,0],"h":1},{"t":13,"s":[0,0],"h":1},{"t":14,"s":[-13.256,0],"h":1},{"t":15,"s":[-19.695,0],"h":1},{"t":16,"s":[-21.059,0],"h":1},{"t":17,"s":[-19.102,0],"h":1},{"t":18,"s":[-15.349,0],"h":1},{"t":19,"s":[-10.985,0],"h":1},{"t":20,"s":[-6.823,0],"h":1},{"t":21,"s":[-3.34,0],"h":1},{"t":22,"s":[-0.741,0],"h":1},{"t":23,"s":[0.966,0],"h":1},{"t":24,"s":[1.894,0],"h":1},{"t":25,"s":[2.216,0],"h":1},{"t":26,"s":[2.121,0],"h":1},{"t":27,"s":[1.78,0],"h":1},{"t":28,"s":[1.332,0],"h":1},{"t":29,"s":[0.877,0],"h":1},{"t":30,"s":[0.479,0],"h":1},{"t":31,"s":[0.169,0],"h":1},{"t":32,"s":[-0.045,0],"h":1},{"t":33,"s":[-0.172,0],"h":1},{"t":34,"s":[-0.227,0],"h":1},{"t":35,"s":[-0.231,0],"h":1},{"t":36,"s":[-0.203,0],"h":1},{"t":37,"s":[-0.159,0],"h":1},{"t":38,"s":[-0.11,0],"h":1}],"ix":3},"r":{"a":0,"k":100,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.901176542394,0.043115081039,0.043115081039,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[396.5,0.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[102,102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":22,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.901176542394,0.043115081039,0.043115081039,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"t":3,"s":[250.5,0.5],"h":1},{"t":4,"s":[274.834,0.5],"h":1},{"t":5,"s":[299.171,0.5],"h":1},{"t":6,"s":[323.501,0.5],"h":1},{"t":7,"s":[347.824,0.5],"h":1},{"t":8,"s":[372.167,0.5],"h":1},{"t":9,"s":[396.5,0.5],"h":1},{"t":10,"s":[412.236,0.5],"h":1},{"t":11,"s":[419.88,0.5],"h":1},{"t":12,"s":[421.499,0.5],"h":1},{"t":13,"s":[419.176,0.5],"h":1},{"t":14,"s":[414.721,0.5],"h":1},{"t":15,"s":[409.54,0.5],"h":1},{"t":16,"s":[404.6,0.5],"h":1},{"t":17,"s":[400.465,0.5],"h":1},{"t":18,"s":[397.379,0.5],"h":1},{"t":19,"s":[395.353,0.5],"h":1},{"t":20,"s":[394.251,0.5],"h":1},{"t":21,"s":[393.869,0.5],"h":1},{"t":22,"s":[393.982,0.5],"h":1},{"t":23,"s":[394.388,0.5],"h":1},{"t":24,"s":[394.919,0.5],"h":1},{"t":25,"s":[395.459,0.5],"h":1},{"t":26,"s":[395.931,0.5],"h":1},{"t":27,"s":[396.299,0.5],"h":1},{"t":28,"s":[396.553,0.5],"h":1},{"t":29,"s":[396.704,0.5],"h":1},{"t":30,"s":[396.77,0.5],"h":1},{"t":31,"s":[396.775,0.5],"h":1},{"t":32,"s":[396.741,0.5],"h":1},{"t":33,"s":[396.688,0.5],"h":1},{"t":34,"s":[396.631,0.5],"h":1},{"t":35,"s":[396.578,0.5],"h":1},{"t":36,"s":[396.534,0.5],"h":1},{"t":37,"s":[396.503,0.5],"h":1},{"t":38,"s":[396.483,0.5],"h":1}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"t":3,"s":[110,90],"h":1},{"t":4,"s":[110,90],"h":1},{"t":5,"s":[110,90],"h":1},{"t":6,"s":[110,90],"h":1},{"t":7,"s":[103.333,96.667],"h":1},{"t":8,"s":[96.667,103.333],"h":1},{"t":9,"s":[90,110],"h":1},{"t":10,"s":[89.022,110.978],"h":1},{"t":11,"s":[90.261,109.739],"h":1},{"t":12,"s":[100,100],"h":1},{"t":13,"s":[102.156,97.844],"h":1},{"t":14,"s":[103.203,96.797],"h":1},{"t":15,"s":[103.425,96.575],"h":1},{"t":16,"s":[103.106,96.894],"h":1},{"t":17,"s":[102.496,97.504],"h":1},{"t":18,"s":[101.786,98.214],"h":1},{"t":19,"s":[101.11,98.89],"h":1},{"t":20,"s":[100.543,99.457],"h":1},{"t":21,"s":[100.12,99.88],"h":1},{"t":22,"s":[99.843,100.157],"h":1},{"t":23,"s":[99.692,100.308],"h":1},{"t":24,"s":[99.64,100.36],"h":1},{"t":25,"s":[99.655,100.345],"h":1},{"t":26,"s":[99.711,100.289],"h":1},{"t":27,"s":[99.783,100.217],"h":1},{"t":28,"s":[99.857,100.143],"h":1},{"t":29,"s":[99.922,100.078],"h":1},{"t":30,"s":[99.972,100.028],"h":1},{"t":31,"s":[100.007,99.993],"h":1},{"t":32,"s":[100.028,99.972],"h":1},{"t":33,"s":[100.037,99.963],"h":1},{"t":34,"s":[100.038,99.962],"h":1},{"t":35,"s":[100.033,99.967],"h":1},{"t":36,"s":[100.026,99.974],"h":1},{"t":37,"s":[100.018,99.982],"h":1},{"t":38,"s":[100.011,99.989],"h":1}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":51,"st":3,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 4","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"t":0,"s":[90],"h":1},{"t":1,"s":[77.143],"h":1},{"t":2,"s":[64.286],"h":1},{"t":3,"s":[51.429],"h":1},{"t":4,"s":[38.571],"h":1},{"t":5,"s":[25.714],"h":1},{"t":6,"s":[12.857],"h":1},{"t":7,"s":[0],"h":1},{"t":8,"s":[-8.315],"h":1},{"t":9,"s":[-12.354],"h":1},{"t":10,"s":[-13.21],"h":1},{"t":11,"s":[-11.982],"h":1},{"t":12,"s":[-9.628],"h":1},{"t":13,"s":[-6.891],"h":1},{"t":14,"s":[-4.28],"h":1},{"t":15,"s":[-2.095],"h":1},{"t":16,"s":[-0.465],"h":1},{"t":17,"s":[0.606],"h":1},{"t":18,"s":[1.188],"h":1},{"t":19,"s":[1.39],"h":1},{"t":20,"s":[1.33],"h":1},{"t":21,"s":[1.116],"h":1},{"t":22,"s":[0.835],"h":1},{"t":23,"s":[0.55],"h":1},{"t":24,"s":[0.301],"h":1},{"t":25,"s":[0.106],"h":1},{"t":26,"s":[-0.028],"h":1},{"t":27,"s":[-0.108],"h":1},{"t":28,"s":[-0.142],"h":1},{"t":29,"s":[-0.145],"h":1},{"t":30,"s":[-0.127],"h":1},{"t":31,"s":[-0.099],"h":1},{"t":32,"s":[-0.069],"h":1}],"ix":10},"p":{"a":1,"k":[{"t":0,"s":[540.004,1145.483,0],"h":1},{"t":1,"s":[540.004,1059.083,0],"h":1},{"t":2,"s":[540.004,972.683,0],"h":1},{"t":3,"s":[540.004,886.281,0],"h":1},{"t":4,"s":[540.004,799.892,0],"h":1},{"t":5,"s":[540.004,713.485,0],"h":1},{"t":6,"s":[540.004,627.083,0],"h":1},{"t":7,"s":[540.004,540.683,0],"h":1},{"t":8,"s":[540.004,484.809,0],"h":1},{"t":9,"s":[540.004,457.669,0],"h":1},{"t":10,"s":[540.004,451.919,0],"h":1},{"t":11,"s":[540.004,460.17,0],"h":1},{"t":12,"s":[540.004,475.987,0],"h":1},{"t":13,"s":[540.004,494.381,0],"h":1},{"t":14,"s":[540.004,511.923,0],"h":1},{"t":15,"s":[540.004,526.604,0],"h":1},{"t":16,"s":[540.004,537.561,0],"h":1},{"t":17,"s":[540.004,544.757,0],"h":1},{"t":18,"s":[540.004,548.667,0],"h":1},{"t":19,"s":[540.004,550.025,0],"h":1},{"t":20,"s":[540.004,549.622,0],"h":1},{"t":21,"s":[540.004,548.184,0],"h":1},{"t":22,"s":[540.004,546.296,0],"h":1},{"t":23,"s":[540.004,544.381,0],"h":1},{"t":24,"s":[540.004,542.704,0],"h":1},{"t":25,"s":[540.004,541.398,0],"h":1},{"t":26,"s":[540.004,540.494,0],"h":1},{"t":27,"s":[540.004,539.96,0],"h":1},{"t":28,"s":[540.004,539.726,0],"h":1},{"t":29,"s":[540.004,539.708,0],"h":1},{"t":30,"s":[540.004,539.827,0],"h":1},{"t":31,"s":[540.004,540.015,0],"h":1}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"t":0,"s":[0,0,100],"h":1},{"t":1,"s":[51.429,51.429,100],"h":1},{"t":2,"s":[102.857,102.857,100],"h":1},{"t":3,"s":[154.286,154.286,100],"h":1},{"t":4,"s":[205.714,205.714,100],"h":1},{"t":5,"s":[257.143,257.143,100],"h":1},{"t":6,"s":[308.571,308.571,100],"h":1},{"t":7,"s":[360,360,100],"h":1},{"t":8,"s":[393.261,393.261,100],"h":1},{"t":9,"s":[409.417,409.417,100],"h":1},{"t":10,"s":[412.84,412.84,100],"h":1},{"t":11,"s":[407.928,407.928,100],"h":1},{"t":12,"s":[398.513,398.513,100],"h":1},{"t":13,"s":[387.563,387.563,100],"h":1},{"t":14,"s":[377.12,377.12,100],"h":1},{"t":15,"s":[368.381,368.381,100],"h":1},{"t":16,"s":[361.858,361.858,100],"h":1},{"t":17,"s":[357.575,357.575,100],"h":1},{"t":18,"s":[355.247,355.247,100],"h":1},{"t":19,"s":[354.439,354.439,100],"h":1},{"t":20,"s":[354.679,354.679,100],"h":1},{"t":21,"s":[355.535,355.535,100],"h":1},{"t":22,"s":[356.659,356.659,100],"h":1},{"t":23,"s":[357.799,357.799,100],"h":1},{"t":24,"s":[358.797,358.797,100],"h":1},{"t":25,"s":[359.575,359.575,100],"h":1},{"t":26,"s":[360.113,360.113,100],"h":1},{"t":27,"s":[360.43,360.43,100],"h":1},{"t":28,"s":[360.57,360.57,100],"h":1},{"t":29,"s":[360.58,360.58,100],"h":1},{"t":30,"s":[360.51,360.51,100],"h":1},{"t":31,"s":[360.398,360.398,100],"h":1},{"t":32,"s":[360.276,360.276,100],"h":1}],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"mn":"Pseudo/MDS Elastic Controller","ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","mn":"Pseudo/MDS Elastic Controller-0001","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","mn":"Pseudo/MDS Elastic Controller-0002","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","mn":"Pseudo/MDS Elastic Controller-0003","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[160,160],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":30,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":5,"k":{"a":0,"k":[0,0.976,0.929,0.196,0.291,0.955,0.547,0.339,0.582,0.933,0.165,0.482,0.791,0.467,0.165,0.741,1,0,0.165,1],"ix":9}},"s":{"a":0,"k":[-90.128,98.167],"ix":5},"e":{"a":0,"k":[88.569,-88.203],"ix":6},"t":2,"h":{"a":0,"k":7.039,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":51,"st":0,"bm":0}],"markers":[]};
  
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the div where you want the animation
    renderer: 'svg', // render as SVG (you can also use 'canvas' or 'html')
    loop: true, // set to true if you want the animation to loop
    autoplay: true, // auto play the animation
    animationData: animationData // the JSON data of the animation
  });