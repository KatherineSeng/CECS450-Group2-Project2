import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

public class convertFiles {
    public static void main(String[] args) throws IOException {
        File dir = new File(".");
        File parentDir = dir.getParentFile();

        int totalParticipants = 36;

        JSONObject graphObj = new JSONObject();
        JSONObject treeObj = new JSONObject();
        JSONObject jsonObject;
        JSONArray jsonArray;

        for (int i = 1; i <= totalParticipants; i++) {
            String pFolder = "p" + i;

            FileWriter gFile = new FileWriter(pFolder + "_Graph.json");
            FileWriter tFile = new FileWriter(pFolder + "_Tree.json");

            if (Files.exists(Paths.get(pFolder))) {
                File graphFXD = new File(parentDir, pFolder + "/" + pFolder + ".graphFXD.txt");
                Scanner graphReader = new Scanner(graphFXD);

                File treeFXD = new File(parentDir, pFolder + "/" + pFolder + ".treeFXD.txt");
                Scanner treeReader = new Scanner(treeFXD);

                // If folder exists
                if (graphFXD.canRead() && treeFXD.canRead()) {
                    // Adds graph object to json file
                    jsonArray = new JSONArray();
                    while (graphReader.hasNext()) {
                        jsonObject = new JSONObject();
                        jsonObject.put("Fix Point", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Start Time", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Length", Integer.parseInt(graphReader.next()));
                        jsonObject.put("X Pos", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Y Pos", Integer.parseInt(graphReader.next()));
                        jsonArray.put(jsonObject);
                    }
                    //graphObj.put("Graph FXD",jsonArray);
                    gFile.write(jsonArray.toString());

                    // Adds tree object to json file
                    jsonArray = new JSONArray();
                    while (treeReader.hasNext()) {
                        jsonObject = new JSONObject();
                        jsonObject.put("Fix Point", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Start Time", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Length", Integer.parseInt(treeReader.next()));
                        jsonObject.put("X Pos", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Y Pos", Integer.parseInt(treeReader.next()));
                        jsonArray.put(jsonObject);
                    }
                    //treeObj.put("Tree FXD",jsonArray);
                    tFile.write(jsonArray.toString());
                }
            }
            gFile.close();
            tFile.close();
        }
    }
}