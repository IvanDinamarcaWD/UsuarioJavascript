<?php

    if($_POST){
        require_once("conexion.php");

        if($_POST["action"] == "listarRegiones"){
            $query_select = mysqli_query($conection,"SELECT ID_REGION, NOMBRE_REGION FROM REGIONES");
            $num_rows = mysqli_num_rows($query_select);
            if($num_rows > 0){
                $htmlTable = "<option value='0' selected disabled=''>Seleccione su región</option>";
                while($row = mysqli_fetch_assoc($query_select)){
                    $htmlTable .="<option value='".$row['ID_REGION']."'>".$row['NOMBRE_REGION']."</option>";
                }
                echo json_encode($htmlTable,JSON_UNESCAPED_UNICODE);
            }else{
                echo "notData";
            }
            exit;        
        }

    }
?>