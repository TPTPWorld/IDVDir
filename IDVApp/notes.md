# NOTES

- On line 519 and 521 of TPTP.g4, I found a reason that is currently breaking IDV.
  - The old antlr file from Tobias defined parent_list as:
    - parent_list             : parent_info ( ',' parent_info )*;
  - Our current antlr file had:
    - parent_list : parent_info  |  parent_info','parent_list;
- I tried out Tobias' definition and it fixed the tree.

<br>

- There was also another issue in parser.js.
  - Geoff told us that he renamed inference_parents to parents under inference_record, so we changed the call from inference_record().inference_parents() to inference_record().parents()
