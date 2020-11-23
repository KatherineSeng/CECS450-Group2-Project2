package main.java.main;//package main.java.main;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

public class readTXTFile {
    public static void main(String[] args) throws IOException {
        File dir = new File(".");
        File parentDir = dir.getParentFile();

        int totalParticipants = 36;

        JsonArray jsonArr = new JsonArray();
        JsonObject jsonObj = new JsonObject();

        jsonObj.addProperty("Fix Point", 0);
        jsonObj.addProperty("Start Time", 0);
        jsonObj.addProperty("Length", 0);
        jsonObj.addProperty("X Position", 0);
        jsonObj.addProperty("Y Position", 0);

        for (int i = 1; i <= totalParticipants; i++) {
            String pFolder = "p" + i;

            if (Files.exists(Paths.get(pFolder))) {
                File graphFXD = new File(parentDir, pFolder + "/" + pFolder + ".graphFXD.txt");
                Scanner graphReader = new Scanner(graphFXD);

                File treeFXD = new File(parentDir, pFolder + "/" + pFolder + ".treeFXD.txt");
                Scanner treeReader = new Scanner(treeFXD);

                // If folder exists
                if (graphFXD.canRead() && treeFXD.canRead()) {
                    String jsonFile = pFolder + ".json";

                    jsonObj = new JsonObject();
                    while (graphReader.hasNext()) {
                        jsonObj.addProperty(pFolder, graphReader.next());
                    }
                    jsonObj = new JsonObject();
                    while (treeReader.hasNext()) {
                        jsonObj.addProperty(pFolder, treeReader.next());
                    }

                    FileWriter gFile = new FileWriter(jsonFile);
                    gFile.write(jsonObj.toString());
                    gFile.close();
                }
            }
        }
    }
}
