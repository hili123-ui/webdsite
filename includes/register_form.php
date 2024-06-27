<?php  include('header.php');?>
      <?php  include('navbar.php'); 
        ?>
   
<div class="form-container">

   <form action="register_form.php" method="post">
      <h3>تسجيل حساب</h3>
      <?php
      if(isset($error)){
         foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
         };
      };
      ?>
      <input type="text" name="firstName" required placeholder="الاسم الاول">
      <input type="text" name="lastName" required placeholder="الاسم الثاني">
      <input type="password" name="password" required placeholder="كلمة المرور">
      <input type="password" name="cpassword" required placeholder="اعادة كلمة المرور">
      <input type="email" name="email" required placeholder="البريد الالكتروني">
      <input type="remail" name="remail" required placeholder="اعادة كتابة البريد الالكتروني">
      <input type="phonenumber" name="phonenumber" required placeholder="رقم الجوال">
      <!-- <select name="user_type">
         <option value="user">user</option>
         <option value="admin">admin</option>
      </select> -->
      <input type="submit" name="submit" value="تسجيل حساب" class="form-btn">
      <p>اذا كان لديك حساب بلفعل انتقل الي  <a href="login.php">تسجيل الدخول</a></p>
   </form>

</div>
<div class="info">
<?php

@include 'config.php';

if(isset($_POST['submit'])){

   $firstName=$_POST['firstName'];
   $lastName=$_POST['lastName'];
   $password=$_POST['password'];
   $password=md5($password);
   $cpassword=$_POST['cpassword'];
   $cpassword=md5($cpassword);
   $email=$_POST['email'];
   $remail=$_POST['remail'];
   $phonenumber=$_POST['phonenumber'];

   // Basic validation
if (empty($email) || empty($password) || empty($phonenumber)) {
   die("All fields are required.");
}

if ($email != $remail) {
   die("تاكد من نطابق الايميل.");
}

if ($password != $cpassword) {
   die("كلمات المرور ليست متطابقه.");
}

// $hashed_password = md5($password);
// $hashed_cpassword = md5($cpassword);
   

   $checkEmail="SELECT * From users where email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "هذا الايميل موجد لدينا بلفعل !";
     }
   else{
      $insertQuery="INSERT INTO users(firstName,lastName,password,cpassword,email,remail,phonenumber)
                     VALUES ('$firstName','$lastName','$password','$cpassword','$email','$remail','$phonenumber')";
          if($conn->query($insertQuery)==TRUE){
              header("location: login.php");
          }

          if ($stmt->execute()) {
            echo "تم التسجيل بنجاح!";
        }
          else{
              echo "Error:".$conn->error;
          }
   
   
   }

};


?></div>

<?php  include ('footer.php'); ?>