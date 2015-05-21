# Remove any references to Scriptin99 in package.json
#! /bin/bash
sed -i ''\
    -e 's/APACHE V2/Your License/g'\
    -e 's/Scriptin99/Your Project/g'\
    -e 's/jgriffith/Your Name/g'\
    ./package.json

# Tar up the directory, ignore unwanted files
tar -zcvf latest.tar.gz -X ./conf/archive.exclude.txt ./

# Reset the directory
git checkout package.json
