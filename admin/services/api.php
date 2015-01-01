<?php
 require_once 'config.php'; // Database setting constants [DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD]
 require_once("Rest.inc.php");
	
class API extends REST {

//	public $data = "";
	private $db = NULL;
	
	public function __construct(){
		parent::__construct();				// Init parent contructor
		$this->dbConnect();					// Initiate Database connection
	}
	
	/*
	 *  Connect to Database
	*/
	private function dbConnect(){
        $dsn = 'mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8';

        try {
            $this->db = new PDO($dsn, DB_USERNAME, DB_PASSWORD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        } catch (PDOException $e) {
            $response["status"] = "error";
            $response["message"] = 'Connection failed: ' . $e->getMessage();
            $response["data"] = null;
            //echoResponse(200, $response);
            exit;
        }
		
		$this->db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
		$this->db->exec("SET NAMES 'utf8'");

	}
		
	/*
	 * Dynmically call the method based on the query string
	 */
	public function processApi(){
		$func = strtolower( trim( str_replace("/", "", $_REQUEST['x']) ) );

		if( (int)method_exists($this, $func) > 0 )
			$this->$func();
		else
			$this->response('',404); // If the method not exist with in this class "Page not found".
	}
			
	private function exposition(){
		if($this->get_request_method() != "GET"){
			$this->response('',406);
		}

		$query = "SELECT idToile, path, titre, path_thumb, hauteur, largeur, tx_vibratoire, prix, date_creation"
				. " FROM t_toile"
				. " ORDER BY 1";
		
       try {
          $stmt = $this->db->prepare($query);
          $stmt->execute( array() );
          $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
          if( count($rows) > 0 ){
            $response["status"] = "success";
            $response["message"] = "Data selected from database";
         } else {
            $response["status"] = "warning";
            $response["message"] = "No data found.";
         }
          $response["result"] = $rows;
        } catch(PDOException $e) {
            $response["status"] = "error";
            $response["message"] = 'Select Failed: ' . $e->getMessage();
            $response["result"] = null;
        }

 		$this->response( json_encode($response), 200 );
   }
   
	private function toile(){
		if($this->get_request_method() != "GET"){
			$this->response('',406);
		}
		$id = $_GET['id'];
		if($id > 0){
			$query="SELECT idToile, path, titre, path_thumb, hauteur, largeur, tx_vibratoire, prix, date_creation"
				. " FROM t_toile"
				. " WHERE idToile = ?";
			try {
			  $stmt = $this->db->prepare($query);
			  $stmt->execute( array( $id ) );
			  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
			  if( count($rows) > 0 ){
				$response["status"] = "success";
				$response["message"] = "Data selected from database";
			 } else {
				$response["status"] = "warning";
				$response["message"] = "No data found.";
			 }
			  $response["result"] = $rows;
			} catch(PDOException $e) {
				$response["status"] = "error";
				$response["message"] = 'Select Failed: ' . $e->getMessage();
				$response["result"] = null;
			}
			
			$this->response( json_encode($response), 200 );
		
		}
		
		$this->response('',204);	// If no records "No Content" status
	}
	
	private function updateToile(){
		if($this->get_request_method() != "POST"){
			$this->response('',406);
		}
		$param = json_decode(file_get_contents("php://input"),true);
		$id = (int)$param['id'];
		$toile = $param['toile'];
		$query = "UPDATE t_toile "
				. " SET titre = ?, hauteur = ?, largeur = ?, prix = ?, tx_vibratoire = ?"
				. " WHERE idToile = ?";
		try {
		  $stmt = $this->db->prepare($query);
		  $response["result"] = $stmt->execute( array( $toile['titre'], $toile['hauteur'], $toile['largeur'], $toile['prix'], $toile['tx_vibratoire'], $id ) );

		  if( $response["result"] ){
			$response["status"] = "success";
			$response["message"] = "Données Modifiées";
		 } else {
			$response["status"] = "warning";
			$response["message"] = "No data found.";
		 }

		 } catch(PDOException $e) {
			$response["status"] = "error";
			$response["message"] = 'Select Failed: ' . $e->getMessage();
			$response["result"] = null;
		}
		$this->response( json_encode($response), 200 );
	}
}

// Initiiate Library
$api = new API;
$api->processApi();
