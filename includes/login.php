<?php  include('header.php');?>

 <?php  include('navbar.php'); ?> 

<?php  @include 'config.php';

// Database connection
// $servername = "localhost";
// $username = "root"; // Your MySQL username
// $password = ""; // Your MySQL password
// $dbname = "cass"; // Your database name

// $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// Handling login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if username exists in database
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct, so start a new session
            $_SESSION['email'] = $email;
            echo "Login successful!";
            // Redirect to another page or display a success message
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "User not found";
    }
}

// $conn->close();
?>




    
        <div class="container">
            <div class="box form-box">
                <header>login</header>
                <form action="login.php" method="post">
                <div class="field input">
                        <label for="username">username</label>
                        <input type="text" name="username" id="username" required>
                    </div>

                    <div class="field input">
                        <label for="password">password</label>
                        <input type="password" name="password" id="password" required>
                    </div>

                    <div class="field">
                        <label for="username">username</label>
                        <input type="submit" name="submit" value="login" required>
                    </div>
                    <div class="link">
                        <div class="h1">اذا لم يكن لديك حساب<br><a href="register_form.php">تسجيل حساب جديد</a></div>
                    </div>
                </form>
            </div>
        </div>
      
<?php  include ('footer.php'); ?>