#!/usr/local/bin/python
if __name__ == '__main__':
    import webbrowser, base64, sys, platform
    args = sys.argv
    #print platform.python_version()

    if len(args) != 2:
        print """Usage: ./visualizer.py transcript
Runs the passed transcript file in a new browser window
"""
    else:
        f = file(args[1])
        transcript = f.read();
        #print len(transcript)
        urlarg = base64.urlsafe_b64encode(transcript)
        pre = "http://www.contrib.andrew.cmu.edu/~dsyang/visualizer-js/visualizer.html?transcript="
        suf = "#simulation"
        url = pre + urlarg + suf
        webbrowser.open(url, 1, autoraise=True)
