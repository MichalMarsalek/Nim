/* Generated by the Nim Compiler v2.1.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function toJSStr(s_33556901) {
  var result_33556902 = null;

    var res_33556943 = newSeq_33556919((s_33556901).length);
    var i_33556944 = 0;
    var j_33556945 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556944 < (s_33556901).length)) break Label2;
          var c_33556946 = s_33556901[i_33556944];
          if ((c_33556946 < 128)) {
          res_33556943[j_33556945] = String.fromCharCode(c_33556946);
          i_33556944 += 1;
          }
          else {
            var helper_33556959 = newSeq_33556919(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556960 = c_33556946.toString(16);
                  if ((((code_33556960) == null ? 0 : (code_33556960).length) == 1)) {
                  helper_33556959.push("%0");;
                  }
                  else {
                  helper_33556959.push("%");;
                  }
                  
                  helper_33556959.push(code_33556960);;
                  i_33556944 += 1;
                  if ((((s_33556901).length <= i_33556944) || (s_33556901[i_33556944] < 128))) {
                  break Label3;
                  }
                  
                  c_33556946 = s_33556901[i_33556944];
                }
            };
++excHandler;
            try {
            res_33556943[j_33556945] = decodeURIComponent(helper_33556959.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556943[j_33556945] = helper_33556959.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556945 += 1;
        }
    };
    if (res_33556943.length < j_33556945) { for (var i = res_33556943.length ; i < j_33556945 ; ++i) res_33556943.push(null); }
               else { res_33556943.length = j_33556945; };
    result_33556902 = res_33556943.join("");

  return result_33556902;

}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 635;
    F.filename = "system.nim";
    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }  framePtr = F.prev;

  return result_33556922;

}

function HEX3Aanonymous_654311427() {
  var F = {procname: "jscore_examples_3.:anonymous", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
  framePtr = F;
    F.line = 153;
    F.filename = "jscore.nim";
    rawEcho([77,105,99,114,111,116,97,115,107]);
  framePtr = F.prev;

  
}
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
F.line = 153;
F.filename = "jscore.nim";
queueMicrotask(HEX3Aanonymous_654311427);
framePtr = F.prev;
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
