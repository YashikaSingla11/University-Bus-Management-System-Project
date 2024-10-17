<?php
    $role_id = $_POST['role_id'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //Database Connection
    $conn = new mysqli ('localhost','root','','project');
    if($conn->connect_error){
        die("Connection Failed : ".$conn->connect_error);
    }else{
    $stmt = $conn->prepare("insert into login(role_id,email,password) values(?,?,?)");
    $stmt-> blind_parameter("iisi",$role_id,$email,$password);
    $stmt->execute();
    echo "login successfully";
    $stmt->close();
    $conn->close();
    }
?>