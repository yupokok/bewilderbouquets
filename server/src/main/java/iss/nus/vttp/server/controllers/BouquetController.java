package iss.nus.vttp.server.controllers;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import iss.nus.vttp.server.Utils;
import iss.nus.vttp.server.models.Bouquet;
import iss.nus.vttp.server.models.BouquetOrder;
import iss.nus.vttp.server.service.BouquetService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@RestController
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class BouquetController {

	@Autowired
	private BouquetService bouquetService;

	@GetMapping(path = "/bouquets")
	@ResponseBody
	public ResponseEntity<String> getBouquets() {

		List<JsonObject> bouquets = bouquetService.getBouquets().stream()
				.map(Utils::toJson)
				.toList();

		return ResponseEntity.ok(Json.createArrayBuilder(bouquets).build().toString());
	}

	@PostMapping(path = "/add-custom")
	@ResponseBody
	public ResponseEntity<String> createCustomBouquet(@RequestBody String payload) {

		JsonReader jsonReader = Json.createReader(new StringReader(payload));
		JsonObject customBouquetJO = jsonReader.readObject();

		System.out.printf("Order received and parsed in SpringBpoot: %s\n", customBouquetJO);

		Bouquet customBouquet = new Bouquet();
		customBouquet.setBouquetId(customBouquetJO.getString("bouquetId"));
		customBouquet.setName(customBouquetJO.getString("name"));
		customBouquet.setBasePrice(customBouquetJO.getInt("basePrice"));
		customBouquet.setDescription(customBouquetJO.getString("description"));
		customBouquet.setImage(customBouquetJO.getString("image"));
		customBouquet.setType(customBouquetJO.getString("type"));
		customBouquet.setWrap(customBouquetJO.getString("wrap"));

		JsonArray customFlowersArray = customBouquetJO.getJsonArray("flowers");
		List<String> customFlowers = new ArrayList<>();
		for (int i = 0; i < customFlowersArray.size(); i++) {
			customFlowers.add(customFlowersArray.getString(i));
		}

		JsonArray customMushroomsArray = customBouquetJO.getJsonArray("mushrooms");
		List<String> customMushrooms = new ArrayList<>();
		for (int i = 0; i < customMushroomsArray.size(); i++) {
			customMushrooms.add(customMushroomsArray.getString(i));
		}
		customBouquet.setFlowers(customMushrooms);

		try {
			String customId = bouquetService.createCustomBouquet(customBouquet);
			return ResponseEntity.status(200).body("{\"orderId\": \"" + customId + "\"}");
		} catch (Exception e) {
			return ResponseEntity.status(400).body("{\"message\": \"" + e.getMessage() + "\"}");
		}
	}


	@PostMapping(path = "/create-bouquet-order")
	@ResponseBody
	public ResponseEntity<String> createBouquetOrder(@RequestBody String payload) {

		JsonReader jsonReader = Json.createReader(new StringReader(payload));
		JsonObject bouquetOrderJO = jsonReader.readObject();

		System.out.printf("BouquetOrder received and parsed in SpringBpoot: %s\n", bouquetOrderJO);

		BouquetOrder bouquetOrder = new BouquetOrder();
		bouquetOrder.setBouquetId(bouquetOrderJO.getString("bouquetId"));
		bouquetOrder.setName(bouquetOrderJO.getString("name"));
		bouquetOrder.setImage(bouquetOrderJO.getString("image"));
		bouquetOrder.setSize(bouquetOrderJO.getString("size"));
		bouquetOrder.setFinalPrice(bouquetOrderJO.getInt("finalPrice"));
		bouquetOrder.setWrap(bouquetOrderJO.getString("wrap"));

		try {
			String bouquetOrderId = bouquetService.createBouquetOrder(bouquetOrder);
			return ResponseEntity.status(200).body("{\"orderId\": \"" + bouquetOrderId + "\"}");
		} catch (Exception e) {
			return ResponseEntity.status(400).body("{\"message\": \"" + e.getMessage() + "\"}");
		}
	}
}
