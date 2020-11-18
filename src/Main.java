import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) throws IOException {
        //String directory = System.getProperty("user.dir");
        //int totalFolders = findFolders(directory);

        int totalParticipants = 36;

        for (int i = 1; i <= totalParticipants; i++) {
            String folder = "p" + i;

            File dir = new File(".");
            File parentDir = dir.getParentFile();

            // Checks if the folder exists
            if (Files.exists(Paths.get(folder))) {
                // Graph ("indented list") fixation data
                File graphFXD = new File(parentDir,folder + "/" + folder + ".graphFXD.txt");
                // Tree ("graph") fixation data
                File treeFXD = new File(parentDir,folder + "/" + folder + ".treeFXD.txt");

                if (graphFXD.canRead() && treeFXD.canRead()) {
                    // Extracts data from graph
                    // Extracts data from tree
                }
            }
        }
    }

    // Method to find the raw data folders in the directory
    //public static int findFolders(String folder) {
        //File directory = new File(folder);
        //int numFolders = 0;
        //File listDirectory[] = directory.listFiles();
        //for (int i = 0; i < listDirectory.length; i++) {
            //if (listDirectory[i].isDirectory()) {
                //numFolders++;
            //}
        //}
        // Returns only the number of raw data folders
        //return numFolders - 4;
    //}
}
