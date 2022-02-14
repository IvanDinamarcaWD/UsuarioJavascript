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

        if($_POST["action"] == "listarComunas"){
            $idRegion = intval($_POST["idRegion"]);
            $query_select = mysqli_query($conection,"SELECT ID_COMUNA, NOMBRE_COMUNA FROM COMUNAS WHERE ID_REGION = $idRegion");
            $num_rows = mysqli_num_rows($query_select);
            if($num_rows > 0){
                $htmlTable = "<option value='0' selected disabled=''>Seleccione su comuna</option>";
                while($row = mysqli_fetch_assoc($query_select)){
                    $htmlTable .="<option value='".$row['ID_COMUNA']."'>".$row['NOMBRE_COMUNA']."</option>";
                }
                echo json_encode($htmlTable,JSON_UNESCAPED_UNICODE);
            }else{
                echo "notData";
            }
            exit;        
        }

        if($_POST["action"] == "listarCandidatos"){
            $query_select = mysqli_query($conection,"SELECT ID_CANDIDATO, NOMBRE_CANDIDATO FROM CANDIDATOS");
            $num_rows = mysqli_num_rows($query_select);
            if($num_rows > 0){
                $htmlTable = "<option value='0' selected disabled=''>Seleccione su candidato</option>";
                while($row = mysqli_fetch_assoc($query_select)){
                    $htmlTable .="<option value='".$row['ID_CANDIDATO']."'>".$row['NOMBRE_CANDIDATO']."</option>";
                }
                echo json_encode($htmlTable,JSON_UNESCAPED_UNICODE);
            }else{
                echo "notData";
            }
            exit;        
        }

    }
?>