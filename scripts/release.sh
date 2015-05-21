# Remove any references to Scriptin99 in package.json
cat package.json | 
sed 's/Scriptin99/YourProject/g' | 
sed 's/jgriffith/YourName/g' |
sed 's/APACHE V2/YourLicense/g' > package.json

# Tar up the directory, load our exclusions
tar -zcvf latest.tar.gz -X ./conf/archive.exclude.txt ./ && git checkout package.json
