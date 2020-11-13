import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        String directory = System.getProperty("user.dir");
        int totalFolders = findFolders(directory);

        int i = 0;
        while (totalFolders != 0) {
            String folder = "p" + i;

            // Checks if the folder exists
            if (Files.exists(Paths.get(folder))) {
                /**
                 * Iterate through the contents of the folder
                 * Extract the data
                 */

                // Folder checked, move to the next one
                totalFolders--;
            }
            i++;
        }
    }

    // Method to find the raw data folders in the directory
    public static int findFolders(String folder) {
        File directory = new File(folder);
        int numFolders = 0;
        File listDirectory[] = directory.listFiles();
        for (int i = 0; i < listDirectory.length; i++) {
            if (listDirectory[i].isDirectory()) {
                numFolders++;
            }
        }
        // Returns only the number of raw data folders
        return numFolders - 4;
    }
}
