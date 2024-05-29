```php
<?php

class Persona {
  #Creación de los atributos del Objeto [Persona]
  public $name; #Nombre
  public $age;  #Edad
  public $nationality;  #Nacionalidad
  public $currentlyWorking; #Trabajo actual
  public $professionalApproach; #Enfoque Profesional
  public $learning; #Aprendizaje
  public $todaysMood; #Humor
  public $yearsOfExperience; #Años de Experiencia Laboral
}

#Crear objeto (Fernanda)
  $fernanda = new Persona();

#Asignamos los valores de los atributos del Objeto
  $fernanda->name = "María Fernanda Martínez Labra";
  $fernanda->age = 25;
  $fernanda->nationality = "Mexicana";
  $fernanda->currentlyWorking = "Desarrollador PHP en AP/Interfaces";
  $fernanda->professionalApproach = "BackEnd";
  $fernanda->learning = "Buenas prácticas y  la lógica de Programación";
  $fernanda->todaysMood = "Tirar Servidores es mi pasión (Humor)";
  $fernanda->yearsOfExperience = 2;


#Formamos nuestra frase utilizando nuestra función creada
$message = aboutMe($fernanda);

#Imprimimos nuestro resultado
echo $message;

#Hola, mi nombre es María Fernanda Martínez Labra y tengo 25 años, soy de nacionalidad Mexicana. Actualmente trabajo como Desarrollador PHP en AP/Interfaces y mi enfoque profesional es el área del BackEnd. Actualmente mi enfoque se centra en mejorar las Buenas prácticas y la lógica de Programación y si tuviera una frase que me describiera sería: Tirar Servidores es mi pasión (Humor).



#Función para hablar sobre mi
  function aboutMe($objeto) {
    #Armamos nuestro About Me
      $aboutMe = "Hola, mi nombre es ".$objeto->name." y tengo ". $objeto->age." años, soy de nacionalidad ". $objeto->nationality.".";
      $aboutMe .= "Actualmente trabajo como ".$objeto->currentlyWorking." y mi enfoque profesional es el área del ".$objeto->professionalApproach.".";
      $aboutMe .= "Actualmente mi enfoque se centra en mejorar las ".$objeto->learning. " y si tuviera una frase que me describiera sería: ";
      $aboutMe .= $objeto->todaysMood;
  
    #Retornamos nuestro About Me
      return $aboutMe;
  
  }
#Fin Función para hablar sobre mi

?>

```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

# 💫 About Me:
🔭 I'm currently working on AP Interfaces how PHP Developer<br>👯 I'm looking to collaborate in the area the Backend Developer<br>I'm looking to collaborate in the area the Backend Developer<br>🤝 I'm looking for help with the programming logic and the good practice.<br>🌱 I’m currently learning about the security in the web pages.<br>I’m currently learning about the security in the web pages.<br>💬 Ask me about my errors i consider very important for my learning<br>⚡ Throwing servers is my passion (Just kidding). <br>💫 Visit my Porfolio: https://mfmlz.netlify.app/

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

![Music mfmlz](https://spotify-recently-played-readme.vercel.app/api?user=12186582363&count=1)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>


## 🌐 Socials:
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/FerMtzLabra) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/_mf_ml_) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/maria-fernanda-martinez-labra-732039161) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://tiktok.com/@fmltz) 

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

# 💻 Tech Stack:

<br>   
    
- **Front-End Development**:

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


<br>

- **Back-End Development**:

[![My Skills](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://skills.thijs.gg)
[![My Skills](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://skills.thijs.gg)
[![My Skills](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://skills.thijs.gg)


<br>

- **Databases**:

  [![My Skills](https://skills.thijs.gg/icons?i=mongodb,mysql,sql )](https://skills.thijs.gg)

<br>

- **Cloud Hosting**:

  [![My Skills](https://skills.thijs.gg/icons?i=aws,azure,github,netlify)](https://skills.thijs.gg)

<br>

- **Softwares and Tools**:

  [![My Skills](https://skills.thijs.gg/icons?i=linux,git,codepen,postman,bash,eclipse,figma,github,gitlab )](https://skills.thijs.gg)

<br>

- **Extras**:

  [![My Skills](https://skills.thijs.gg/icons?i=stackoverflow,linkedin )](https://skills.thijs.gg)
<br>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=mf-mlz&theme=omni&hide_border=false&include_all_commits=true&count_private=true)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=mf-mlz&theme=omni&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=mf-mlz&theme=omni&hide_border=false&include_all_commits=true&count_private=true&layout=compact)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

## 🏆 GitHub Trophies
![](https://github-profile-trophy.vercel.app/?username=mf-mlz&theme=juicyfresh&no-frame=false&no-bg=false&margin-w=4)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

### ✍️ Random Dev Quote
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

### 🔝 Top Contributed Repo
![](https://github-contributor-stats.vercel.app/api?username=mf-mlz&limit=5&theme=dracula&combine_all_yearly_contributions=true)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"><br><br>

<div align="center">
  <a href="https://mf-mlz.github.io/mf-mlz/">
  <img  src="https://github.com/1999AZZAR/1999AZZAR/blob/main/resources/img/grid-snake.svg"
       alt="snake" /></a>
</div>

---
[![](https://visitcount.itsvg.in/api?id=mf-mlz&icon=7&color=5)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
