<?php
// Start the session
session_start();

// Include your database connection file (make sure this path is correct)
include('db_connection.php');

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form input values
    $role_id = $_POST['role_id'];
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Basic input validation
    if (empty($role_id) || empty($email) || empty($password)) {
        // Redirect back to login page with error
        header('Location: index.html?error=Please fill in all fields');
        exit();
    }

    // Prepare and execute a query to check the user in the database
    $query = "SELECT * FROM users WHERE role_id = ? AND email = ? LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('is', $role_id, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the password (assuming passwords are hashed in the database)
        if (password_verify($password, $user['password'])) {
            // Store user information in session and redirect to homepage
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role_id'] = $user['role_id'];
            header('Location: /HomePage/index1.html');
            exit();
        } else {
            // Incorrect password
            header('Location: index.html?error=Incorrect password');
            exit();
        }
    } else {
        // User not found
        header('Location: index.html?error=User not found');
        exit();
    }
} else {
    // Redirect to login page if the request method is not POST
    header('Location: index.html');
    exit();
}
?>
