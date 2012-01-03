#!/usr/local/bin/python

############## THIS DOES NOT WORK ###########
# gives a Request URL too long error :(


#####
#
# visualizer.py
#  cli for javascript visualizer.
#  reads transcript file passed and base64 encodes it,
#  then attempts to open visualizer in a browser window
#  passing the encoded transcript as a GET variable.
#
####
if __name__ == '__main__':
    import webbrowser, base64, sys
    args = sys.argv

    if len(args) != 2:
        print """Usage: ./visualizer.py transcript
Runs the passed transcript file in a new browser window
"""
    else:
        f = file(args[1])
        transcript = f.read();
        f.close()
        urlarg = base64.urlsafe_b64encode(transcript)
        pre = "http://www.contrib.andrew.cmu.edu/~dsyang/visualizer-js/visualizer.html?transcript="
        suf = "#simulation"
        url = pre + urlarg + suf
        webbrowser.open(url, 1, autoraise=True)
