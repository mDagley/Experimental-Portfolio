<html>
    <head></head>
    <body>
<?php
        $testing = true;
$con=mysqli_connect('localhost','root','root','portfolio');


if(mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: ".mysqli_connect_error();
}
        else if($testing==true){

        $query = "SELECT * FROM class";
        $result=mysqli_query($con,$query);
            
        
echo "<table>
<tr>
<th>Id</th>
<th>Title</th>
<th>School</th>
<th>Semester</th>
<th>Year</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['ClassID'] . "</td>";
    echo "<td>" . $row['Title'] . "</td>";
    echo "<td>" . $row['School'] . "</td>";
    echo "<td>" . $row['Semester'] . "</td>";
    echo "<td>" . $row['Year'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
        }
        
else{
    
    //echo "Database Connected";
}
?>
    </body>
</html>