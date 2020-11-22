package main.java.main;

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

        JsonObject jsonObj;

        for (int i = 1; i <= totalParticipants; i++) {
            String folder = "p" + i;

            if (Files.exists(Paths.get(folder))) {
                File graphFXD = new File(parentDir, folder + "/" + folder + ".graphFXD.txt");
                Scanner graphReader = new Scanner(graphFXD);

                File treeFXD = new File(parentDir, folder + "/" + folder + ".treeFXD.txt");
                Scanner treeReader = new Scanner(treeFXD);

                // If folder exists
                if (graphFXD.canRead() && treeFXD.canRead()) {
                    String tree = "FXDTree" + ".json";
                    String graph = "FXDGraph" + ".json";

                    // Creating a json file with data regarding participants' graph fxd data
                    jsonObj = new JsonObject();
                    while (graphReader.hasNext()) {
                        jsonObj.addProperty(folder, graphReader.next());
                    }
                    FileWriter gFile = new FileWriter(graph);
                    gFile.write(jsonObj.toString());
                    gFile.close();

                    // Creating a json file with data regarding participants' tree fxd data
                    jsonObj = new JsonObject();
                    while (treeReader.hasNext()) {
                        jsonObj.addProperty(folder, treeReader.next());
                    }
                    FileWriter tFile = new FileWriter(tree);
                    tFile.write(jsonObj.toString());
                    tFile.close();
                }
            }
        }
    }
}