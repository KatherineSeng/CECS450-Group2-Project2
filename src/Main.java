import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        int totalParticipants = 36;

        JSONObject jsonObject;
        JSONArray jsonArray;

        File dir = new File(".");
        File parentDir = dir.getParentFile();

        for (int i = 1; i <= totalParticipants; i++) {
            String pFolder = "p" + i;

            // Checks if the raw data folder exists
            if (Files.exists(Paths.get(pFolder))) {
                // Creates the FileWriter objects for the graph and tree files
                FileWriter gFile = new FileWriter(pFolder + "_Graph.json");
                FileWriter tFile = new FileWriter(pFolder + "_Tree.json");

                File graphFXD = new File(parentDir, pFolder + "/" + pFolder + ".graphFXD.txt");
                Scanner graphReader = new Scanner(graphFXD);

                File treeFXD = new File(parentDir, pFolder + "/" + pFolder + ".treeFXD.txt");
                Scanner treeReader = new Scanner(treeFXD);

                // Checks if the folder exists
                if (graphFXD.canRead() && treeFXD.canRead()) {
                    jsonArray = new JSONArray();
                    // Adds raw data from the Graph FXD to a json object
                    while (graphReader.hasNext()) {
                        jsonObject = new JSONObject();
                        jsonObject.put("Fix Point", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Start Time", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Length", Integer.parseInt(graphReader.next()));
                        jsonObject.put("X Pos", Integer.parseInt(graphReader.next()));
                        jsonObject.put("Y Pos", Integer.parseInt(graphReader.next()));
                        // Adds the json object to the json array
                        jsonArray.put(jsonObject);
                    }
                    // Writes the contents of the json array to the file
                    gFile.write(jsonArray.toString());

                    jsonArray = new JSONArray();
                    // Adds raw data from the Tree FXD to a json object
                    while (treeReader.hasNext()) {
                        jsonObject = new JSONObject();
                        jsonObject.put("Fix Point", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Start Time", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Length", Integer.parseInt(treeReader.next()));
                        jsonObject.put("X Pos", Integer.parseInt(treeReader.next()));
                        jsonObject.put("Y Pos", Integer.parseInt(treeReader.next()));
                        // Adds the json object to the json array
                        jsonArray.put(jsonObject);
                    }
                    // Writes the contents of the json array to the file
                    tFile.write(jsonArray.toString());
                }
                // Closes the files
                gFile.close();
                tFile.close();
            }
        }
    }
}
