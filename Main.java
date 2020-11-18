import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        //String directory = System.getProperty("user.dir");
        //int totalFolders = findFolders(directory);

        //int totalParticipants = 36;
    	
    	ArrayList<Participant> pList = new ArrayList<Participant>();

        for (int i = 1; i <= 1; i++) {
            String folder = "p" + i;

            File dir = new File(".");
            File parentDir = dir.getParentFile();
            
            Participant currentP = new Participant();

            // Checks if the folder exists
            if (Files.exists(Paths.get(folder))) {
                // Graph ("indented list") fixation data
                File graphFXD = new File(parentDir,folder + "/" + folder + ".graphFXD.txt");
                Scanner graphReader = new Scanner(graphFXD);
                // Tree ("graph") fixation data
                File treeFXD = new File(parentDir,folder + "/" + folder + ".treeFXD.txt");
                Scanner treeReader = new Scanner(treeFXD);

                if (graphFXD.canRead() && treeFXD.canRead()) {
                    while (graphReader.hasNextLine()) {
                    	currentP.graph.add( Integer.parseInt(graphReader.next()),				// index, col1
                    						new FixPoint(Integer.parseInt(graphReader.next()),	// start time, col2
                    									Integer.parseInt(graphReader.next()),	// duration, col3
                    									Integer.parseInt(graphReader.next()),	// xpos, col4
                    									Integer.parseInt(graphReader.next())) );// ypos, col5
                    }
                    while (treeReader.hasNextLine()) {
                    	currentP.tree.add( Integer.parseInt(treeReader.next()),
                    						new FixPoint(Integer.parseInt(treeReader.next()),
														Integer.parseInt(treeReader.next()),
														Integer.parseInt(treeReader.next()),
														Integer.parseInt(treeReader.next())) );
                    }
                }
                graphReader.close();
                treeReader.close();
            }
            pList.add(currentP);
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
