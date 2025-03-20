# IDV DIR

- How to build `bundle.js`  
`cd BuildBundleWithNode`  
`npm install`     % To update dependencies  
`java -jar antlr-4.10.1-complete.jar -Dlanguage=JavaScript TPTPv8.g4`  
`cd ..`  
`npm run build`  

# THIS IS NO LONGER IN USE
- How to setup with Apache using mod-wsgi.
mod-wsgi works better if python is compiled using the --enable-shared flag:

- Run the following (modifying paths where necessary) to build local Python in `IDVPython`:
    * `bash`
    * `wget https://www.python.org/ftp/python/3.7.5/Python-3.7.5.tgz
    * `tar -zxvf Python-3.7.5.tgz`
    * `cd Python-3.7.5`
    * `./configure --prefix=/home/tptp/ServiceTools/IDVDir/WSGIPython/IDVPython --enable-shared --enable-optimizations LDFLAGS="-Wl,--rpath=/home/tptp/ServiceTools/IDVDir/WSGIPython/IDVPython/lib"`
    * `make`
    * `make install`

At this point, IDV will be installed at the path you specified for --prefix and you can run 
the python binary under the bin subdirectory.
You should also be able to remove the Python-3.7.5.tgz file and Python-3.7.5 folder used 
for building.
Then you can install flask and mod-wsgi using ...
    /home/tptp/ServiceTools/IDVDir/WSGIPython/IDVPython/bin/python -m pip install flask mod-wsgi
Once these are installed, you can symlink the idv.conf file into the /etc/httpd/conf.d apache 
config folder and wsgi.conf into the /etc/httpd/conf.modules.d apache config folder.

